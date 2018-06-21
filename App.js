  // /**
  //  * Sample React Native App
  //  * https://github.com/facebook/react-native
  //  * @flow
  //  */

  import React, { Component } from 'react';
  import {
    AppRegistery,
    StyleSheet,
    Text,
    View
  } from 'react-native';

  import { Calendar, CalendarList, Agenda} from 'react-native-calendars';
  import { Button } from 'react-native'
  import PopupDialog from 'react-native-popup-dialog';
  type Props = {};

  export default class CalendarExample extends Component<Props> {
    popupDialog

    render() {
      return (
    
        // <CalendarList
        //   style = {{
        //     borderWidth: 1,
        //     borderColor: 'gray',
        //     height: 350
        //   }}
        //   current = {'2018-01-01'}
        //   // theme={
        //   //   dayTextColor:'red',
        //   // }
        //   markingType = {'custom'}
        //   markedDates = {{
        //   //     '2018-03-31': {
        //   //     customStyles: {
        //   //       container: {
        //   //         backgroundColor: 'green',
        //   //         borderRadius: 0,
        //   //       },
        //   //       text: {
        //   //         color: 'white',
        //   //       },
        //   //     },
        //   // }
        //     '2018-01-03':{selected:true, selectedColor: 'gray'},
        //     '2018-01-04':{selected:true, selectedColor: 'gray'},
        //     '2018-01-05':{selected:true, selectedColor: 'gray'},
        //     '2018-01-09':{selected:true, selectedColor: 'gray'},
        //     '2018-01-10':{selected:true, selectedColor: 'gray'},
        //     '2018-01-11':{selected:true, selectedColor: 'gray'},
        //     '2018-01-16':{selected:true, selectedColor: 'gray'},
        //     '2018-01-17':{selected:true, selectedColor: 'gray'},
        //     '2018-01-18':{selected:true, selectedColor: 'gray'},
        //     '2018-01-19':{selected:true, selectedColor: 'gray'},
        //     '2018-01-22':{selected:true, selectedColor: 'gray'},
        //     '2018-01-23':{selected:true, selectedColor: 'gray'},
        //     '2018-01-24':{selected:true, selectedColor: 'gray'},
        //     '2018-01-25':{selected:true, selectedColor: 'gray'},  
        //     '2018-01-27':{selected:true, selectedColor: 'gray'},
        //     '2018-01-30':{backgroundColor:'green'},

        //   }}
          
        //   // onDayPress={() => {
        //   //   this.popupDialog.show();
        //   // }}      


        // />
<Calendar
  // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
  current = {'2018-01-01'}
  markingType={'custom'}
  markedDates={{
    '2018-01-03': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius: 0,
          height:15,
        },
      },
    },
    '2018-01-04': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
    '2018-01-05': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
          height:5,
        },
      },
    },
     '2018-01-09': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-10': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-11': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
          height:20,
        },
      },
    },
     '2018-01-16': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-17': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
          height:25
        },
      },
    },
     '2018-01-18': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-19': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-20': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-22': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-23': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-24': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-25': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-27': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-28': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
     '2018-01-30': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
    '2018-01-31': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
    '2018-02-01': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      },
    },
    '2018-02-02': {
      customStyles: {
        container: {
          backgroundColor: 'gray',
          borderRadius:0,
        },
      }
    }
    
    
  }}
/>


// Collection of dates that have to be colored in a special way. Default = {}
//    markingType={'custom'}
//    markedDates={
//     {'2018-05-22': {startingDay: true, color: 'green'},
//      '2018-05-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
//      '2018-05-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
//     }}
//   // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
//   markingType={'period'}
// />

      );
    }
  }




