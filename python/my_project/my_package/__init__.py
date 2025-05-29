# my_package/__init__.py
# 패키지가 임포트될 때 실행되는 초기화 코드
print("my_package를 초기화합니다.")

# 선택적으로, 패키지 레벨에서 바로 접근하고 싶은 요소들을 임포트할 수 있습니다.
# from . import greetings # 이렇게 하면 'my_package.greetings' 대신 'my_package.greetings'로 접근 가능