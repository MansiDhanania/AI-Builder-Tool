from fastapi import FastAPI
from tenacity import retry, stop_after_attempt

app = FastAPI()

@retry(stop=stop_after_attempt(3))
def parse_repo(url):
    # Parses code metrics and README content.
    return {"tests": True, "logging": True, "human_review_state": False}
