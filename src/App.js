import React, { Component } from 'react';
import './App.css';
import StockInfo from './components/Stockinfo';
import { loadQuoteForStock, loadCompanyLogoForStock } from './api/iex';
import Error from './components/Error'
import Logo from './components/Logo'

// if there is a then you get a promise



// quote is data coming in from the end point
class App extends Component {
  state = {
      symbol: 'F',
      quote: null,
      error: false,
      logo: 'aapl'
  };

// it initially loads an empty page, once it's completed do this action component did mount because it has a loadQuote
// ie once the quote is completed loading do this action

componentDidMount() {
  this.loadQuote()
}

loadQuote(){
  loadQuoteForStock(this.state.symbol).then((quote) => {console.log(quote)
    this.setState({quote: quote, error: false})
    // console.log("loadquote",this.state.error)
  })


  .catch((err) => {
    this.setState({error: true, quote: null})

})

loadCompanyLogoForStock(this.state.symbol).then((logo) => {console.log(logo)
  this.setState({logo: logo, error: false})
  // console.log("loadquote",this.state.error)
})

.catch((err) => {
  this.setState({error: true, quote: null})

})

  // {console.log(err)})
}

handleSymbolChange = (event) => {
  const target = event.target;
  const symbol = target.value;
  this.setState({ symbol: symbol });
}

handleButtonClick = (event) => {
  console.log(event.target);
  this.loadQuote();
}

  render() {
    return (
      <div className="App">
        <Logo {...this.state.logo} />
        <h1>Wolf of React</h1>
        <input
        placeholder="Enter symbol"
        value={this.state.symbol}
        onChange={ this.handleSymbolChange }
        />
        <button onClick={this.handleButtonClick}>Get Quote</button>
        <Error error= {this.state.error}/>
        <StockInfo  {...this.state.quote} />
      </div>
    )
  }
}
export default App;
