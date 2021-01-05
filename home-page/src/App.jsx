import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import { Container } from 'shards-react';
import Chat from 'chat/Chat';

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
      quisquam minus, fugiat asperiores quis adipisci odit amet dicta labore
      cupiditate ipsum. Vero libero temporibus ipsam modi non saepe assumenda,
      facilis consequuntur omnis nulla suscipit exercitationem dicta similique
      voluptatem officiis in dolorem quasi accusamus delectus quia eius.
      Veritatis dolores cum consequuntur.
    </p>
    <h1>Chat</h1>
    <Chat />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      minima?
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
