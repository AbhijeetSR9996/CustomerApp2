import React from 'react';
import {TouchableOpacity,View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Backbutton2 extends React.Component {
    constructor(props){
        super(props);    
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

   render() {
       return (
           <View>
                <TouchableOpacity onPress={this.handleBackButtonClick}>
                   <Icons name={'arrow-back'} size={30} color='#fff' style={{marginLeft:'3%'}}/>
                </TouchableOpacity>
           </View>
       );
   };
};
