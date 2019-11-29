# Lazy Loading support with Syncfusion components in React

This sample explains how to do Lazy Loading with Syncfusion components in React.

## Lazy Loading 

In the Lazy Loading technique, we load additional payload only on demand. We can lazy load the Syncfusion components and routes in React by using Code splitting. The React will load only the needed components for a path instead of loading everything in the application. This is the main use of Code splitting. So, it reduces the initial loading time of the application.

## Getting Started

For creating the Syncfusion components in React, refer to the [`getting started`](https://ej2.syncfusion.com/react/documentation/introduction/) documentation.

## React sample with Lazy Loading Routes

We have created the component files for Syncfusion Calendar and Grid components separately.

In the blog.js file, we have added a Syncfusion Calendar component.

```typescript
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
```
 
In the maps.js file, we have added a Syncfusion Grid component.

```typescript
import React, { Component } from 'react'
import './Maps.css'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, PageSettingsModel, Sort } from '@syncfusion/ej2-react-grids';
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
```
 
In the AsyncComponent.js file, we have implemented code splitting to dynamically import the components. 

```typescript
import React, { Component } from "react";

export default function asyncComponent(getComponent) {
    class AsyncComponent extends Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }

    return AsyncComponent;
}
```

We have added Syncfusion components (Grid and Calendar) in the App.js file dynamically.

```typescript
// Dynamically imported components
const Home = asyncComponent(() =>
    import('./Home/Home').then(module => module.default)
)
const Maps = asyncComponent(() =>
    import('./Maps/Maps').then(module => module.default)
)
const Blog = asyncComponent(() =>
    import('./Blog/Blog').then(module => module.default)
)
```

## Run the application

Build and Run the application using the below commands.

```bash
# install dependencies
npm install

# build the application
npm run build

# run the application
npm run start
```
 
