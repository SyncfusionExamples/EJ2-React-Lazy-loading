import React, { Component } from 'react'
import './Maps.css'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import {data} from './datasource'

class Maps extends Component {

     pageSettings= { pageSize: 6 }
    render () {
        return (
            <GridComponent dataSource={data} allowPaging={true} pageSettings={ this.pageSettings }>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
                <ColumnDirective field='CustomerID' width='100'/>
                <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
                <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
                <ColumnDirective field='ShipCountry' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>
        )
    }
}

export default Maps