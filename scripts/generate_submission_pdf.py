from pathlib import Path
import re

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import ListFlowable, ListItem, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "SUBMISSION_SUMMARY.md"
OUTPUT = ROOT / "Mansi_LastName_AIBuilder.pdf"


def escape_inline(text: str) -> str:
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return re.sub(r"`([^`]+)`", r'<font face="Courier">\1</font>', text)


def build_pdf() -> None:
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="BodyTight",
            parent=styles["BodyText"],
            fontSize=10.5,
            leading=14,
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SmallMuted",
            parent=styles["BodyText"],
            fontSize=9,
            textColor=colors.HexColor("#526070"),
            leading=12,
        )
    )

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        rightMargin=0.65 * inch,
        leftMargin=0.65 * inch,
        topMargin=0.65 * inch,
        bottomMargin=0.65 * inch,
    )

    story = []
    bullets = []

    def flush_bullets() -> None:
        nonlocal bullets
        if not bullets:
            return
        story.append(
            ListFlowable(
                [ListItem(Paragraph(item, styles["BodyTight"]), leftIndent=12) for item in bullets],
                bulletType="bullet",
                leftIndent=18,
            )
        )
        story.append(Spacer(1, 0.07 * inch))
        bullets = []

    for raw in SOURCE.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line:
            flush_bullets()
            story.append(Spacer(1, 0.04 * inch))
            continue

        if line.startswith("# "):
            flush_bullets()
            story.append(Paragraph(escape_inline(line[2:]), styles["Title"]))
            story.append(Spacer(1, 0.1 * inch))
            continue

        if line.startswith("## "):
            flush_bullets()
            story.append(Spacer(1, 0.06 * inch))
            story.append(Paragraph(escape_inline(line[3:]), styles["Heading2"]))
            continue

        if line.startswith("- "):
            bullets.append(escape_inline(line[2:]))
            continue

        flush_bullets()
        safe = escape_inline(line)
        if ":" in line and len(line.split(":", 1)[0]) < 32:
            label, rest = safe.split(":", 1)
            story.append(Paragraph(f"<b>{label}:</b>{rest}", styles["BodyTight"]))
        else:
            story.append(Paragraph(safe, styles["BodyTight"]))

    flush_bullets()
    doc.build(story)


if __name__ == "__main__":
    build_pdf()
    print(OUTPUT)
