# main.py

# 1. 패키지 내 특정 모듈 전체 임포트
import my_package.greetings
print(my_package.greetings.say_hello("Alice")) # Hello, Alice!

# 2. 패키지 내 특정 모듈에서 특정 함수/클래스 임포트
from my_package.greetings import say_goodbye
print(say_goodbye("Bob")) # Goodbye, Bob!

# 3. 서브패키지 내 특정 모듈 전체 임포트
import my_package.calculator.basic_ops
print(my_package.calculator.basic_ops.add(10, 5)) # 15

# 4. 서브패키지 내 특정 모듈에서 특정 함수 임포트
from my_package.calculator.advanced_ops import multiply
print(multiply(4, 6)) # 24

# 5. 서브패키지 임포트 (__init__.py에 basic_ops가 미리 임포트되어 있다면)
# from my_package.calculator import basic_ops
# print(basic_ops.subtract(20, 7))