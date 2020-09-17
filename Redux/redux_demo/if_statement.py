

# if ( or (left(E2, 1) = "R"), (left(e2,1) = "I") )  
#     "Republican"    # value if true
# else
#     "Democrat"      # value if false

# # 汉化版本

# 如果 （ (left(E2, 1) = "R") 和 (left(e2,1) = "I") ）里单凡有一个返回值是 true
#     这个格子就是 Republican
# 否则
#     这个格子就是 Democrat

# # 大白话版本

# 如果 这个格子 （从左起开头第‘1’个字母是‘R’ 或者 从左起开头第‘1’个字母是‘I’） ：
#     辣么这个格子就显示 Republican
# 否则，只要这个格子 从左起第一个字母既不是‘R’也不是‘I’：
#     辣么这个格子显示 Democrat


# # or function cheat sheet

# or ( condition_A, condition_B, .......)：
#     当所有condition 都为 FALSE 的时候 返还值是  false
#     但凡有一个condition 是 TRUE 的时候 都返还 true