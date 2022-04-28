# Chatbot Gateway

Chatbot Gateway é um centralizador de chatbots. Ele reúne APIs de diversos canais como: Whatsapp, Telegram, Slack, Teams e E-mail.

 - [x] Whatsapp
	 - [x] Parabéns
	 - [ ] Atividades próximas a expirar
	 - [ ] Novas atividades criadas
	 - [ ] Novas atividades iniciadas
 - [ ] Telegram
 - [ ] Slack
 - [ ] Teams
 - [ ] E-mail

## Integrações

### Jira
O gateway recebe uma mensagem [POST] através do endpoint /v1/webhook/jira/{evento}
#### Eventos disponíveis
- /concludedIssue - Notificação de parabéns, usada quando um usuário concluir um issue

#### Requisitos
É importante provisionar 2 parametros como variáveis de ambiente para que a aplicação possa funcionar:

- AUTH_M2M_TOKEN={token randômico}
	Gere uma string randomica e extensa que possa ser usada como Beare Token.

- TWILIO_SETTINGS={"accountSid": "1234","authToken":"1234","from": "whatsapp:+1234","to": "whatsapp:+1234"}
	Crie uma chave de API no serviço Twilio
