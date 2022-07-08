# Chute Um Número
import random
valor_aleatório = random.randint(1,10)
acertou = False
while acertou == False:
    chute = int(input("Digite um número de 1 à 10: "))
    if chute > valor_aleatório:
        print("O chute foi maior que o valor gerado")
    elif chute < valor_aleatório:
        print("Chute foi menor que o valor gerado")
    elif chute == valor_aleatório:
        acertou = True
        print("Você acertou!")