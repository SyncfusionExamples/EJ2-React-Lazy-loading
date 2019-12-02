import React, { Component } from 'react'
import './Blog.css'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

class Blog extends Component {
  
    render () {
        return (
             <CalendarComponent id="calendar" />
        )
    }
}

export default Blog