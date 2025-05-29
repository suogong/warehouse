# my_package/calculator/advanced_ops.py

'''
def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("0으로 나눌 수 없습니다.")
    return a / b
'''
# my_package/calculator/advanced_ops.py (수정된 내용)

# 상대 경로 임포트: 현재 패키지(calculator) 내의 basic_ops 모듈 임포트
from . import basic_ops

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("0으로 나눌 수 없습니다.")
    return a / b

def power(base, exp):
    # basic_ops 모듈의 add 함수를 사용
    # 여기서는 예시를 위해 더하기를 사용했지만, 실제로는 pow() 같은 함수 사용
    result = 1
    for _ in range(exp):
        result = basic_ops.add(result, base) # basic_ops 모듈의 함수 사용
    return result

# main.py에서 power 함수를 호출하면:
# from my_package.calculator.advanced_ops import power
# print(power(2, 3)) # (2+2+2)+1 = 7 (곱셈이 아닌 덧셈으로 구현된 power 함수)
#'''