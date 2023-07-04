from chatterbot import ChatBot

chatbot = ChatBot('MiChatBot')

entrenamiento = [
    'Hola',
    'Hola, ¿cómo puedo ayudarte?',
    '¿Cuál es tu nombre?',
    'Mi nombre es MiChatBot. ¿Y tú?',
    'Estoy bien. Gracias por preguntar.',
]

chatbot.train(entrenamiento)

# Inicia una conversación con el usuario
while True:
  entrada_usuario = input("Tú: ")
  respuesta_chatbot = chatbot.get_response(entrada_usuario)
  print("MiChatBot: " + str(respuesta_chatbot))