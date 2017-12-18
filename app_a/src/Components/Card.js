import React, { Component } from 'react';

const styles ={
	card:{
		padding: 20,
		margin: 20,
		textAlign: 'center',
		color: 'white',
		backgroundColor: 'skyblue',
		border: '1px solid rgb(0 ,0,0, 0.15)',
	},
	title:{
		fontSize: 24,
		lineHeight: '24px',
	},
	subtitle:{
		fontSize: 14,
		lineHeight: '18px',
	}
}
export default class Card extends Component{
  render(){
    const {title, subtitle}= this.props;
    return(
      <div>
        <h1 style={styles.card}>{title}</h1>
        {subtitle && (<h2 style={styles.subtitle}>{subtitle}</h2>

          )}
      </div>

      );
  }
}