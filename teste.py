# import math
# def armstrong():
#     num = list(map(int, input("Digite numeros com espaço: ").split()))
#     tamanho = len(str(num))
#     soma = 0
#     count = num
#     while count > 0:
#         digito = count % 10
#         soma += digito ** tamanho
#         count //= 10
         
#     if(num == soma):
#         print("este é um numero de Armstrong", num)
#     else:
#         print("este NÃO é um numero de Armstrong", num)
    

# armstrong()



num = map(int, input("descreva um numero: "))

order = len(str(num))


sum = 0

# find the sum of the cube of each digit
temp = num
while temp > 0:
   digit = temp % 10
   sum += digit ** order
   temp //= 10

# display the result
if num == sum:
   print(num,"is an Armstrong number")
else:
   print(num,"is not an Armstrong number")
