# my_package/greetings.py
'''
def say_hello(name):
    return f"Hello, {name}!"

def say_goodbye(name):
    return f"Goodbye, {name}!"

'''
# my_package/greetings.py (수정된 내용)

# 상위 패키지(my_package)의 calculator 서브패키지에서 basic_ops 모듈 임포트
from .calculator import basic_ops # '..'는 my_package를 의미

def say_hello(name):
    return f"Hello, {name}!"

def say_goodbye(name):
    return f"Goodbye, {name}!"

def calculate_greeting_length(name1, name2):
    # 다른 서브패키지의 함수 사용 예시
    len1 = basic_ops.add(len(say_hello(name1)), len(say_goodbye(name2)))
    return len1

# main.py에서 calculate_greeting_length 호출 예시:
# from my_package.greetings import calculate_greeting_length
# print(calculate_greeting_length("Alice", "Bob"))
#'''