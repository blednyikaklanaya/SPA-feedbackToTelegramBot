# How to use it?
This is a prebuilt SPA, you can use a local server by type to view/run it: <a href="https://ospanel.io/">Open Server</a>

## How does the SPA work?
The entire application is made with <a href="https://vitejs.dev/">VITE</a> + REACT. This application uses class components.
There is also a small part written in PHP. It takes **FormData** from the **OrderPage.jsx** component. This component monitors the form submission (onSubmit event), 
which calls a method in the class that collects previously saved data from the form from the state and passes it to the PHP "server" in the form of FormData.
### Then, using the Telegram API and the previously created bot, we send this data to the Telegram group.
 
See if your message has been sent to this group in a <a href="https://t.me/+IEvdKw7RWxMzMjYy">telegram</a>
