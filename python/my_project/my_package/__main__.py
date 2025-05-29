# my_package/__main__.py
from .greetings import say_hello # 상대 경로 임포트
print("Welcome to my_package!")
print(say_hello("World"))

if __name__ == "__main__":
    print("This is the main entry point of my_package.")