import os
from google import genai

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    print("API key nahi mili!")
    exit()

client = genai.Client(api_key=api_key)

print("🤖 JARVIS AI shuru ho gaya!")
print("Band karne ke liye exit likho.")

while True:
    question = input("Tum: ")

    if question.lower() == "exit":
        break

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"Jawab Hindi ya Hinglish mein do: {question}"
        )
        print("JARVIS:", response.text)

    except Exception as e:
        print("Error:", e)




