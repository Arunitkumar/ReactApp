import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';


class TableEditor extends Component {
   state = {
      //rows : this.props.rows,
      data : this.props.datas
    //    colomns : this.props.colomns, 
       // mdtable : this.props.MDBDataTable
    //   row : 1
  //render : this.props.rerenderRows
  // <button onClick={ ()=> {this.props.onAdd(this.props.rows)}}> Add </button> -->
  //child : this.props.children.props
   }

   addRows = (rows) => {
    const add = {
        name: 'Test Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86'
    };

    //const length = rows.length;
   // const index = 

    //this.state.data.rows[length] = add;
    //console.log(this.state.child.data.rows);
    const datas = this.state.data.rows.push(add);
    console.log(this.state.data.rows);
    
    //this.rows
   this.setState({ datas : this.state.data}  );
   //this.render.MDBDataTable.




};

    handleDelete = (rows) =>{

    }


    render() {
        return (
            <div>
        
        <button onClick={ ()=> {this.addRows(this.state.data.rows)}}> Add </button>
        <div> <MDBDataTable
         striped
         bordered
        small
        data={this.state.data}/>
    
            </div>

        </div>
        );
    }
}

export default TableEditor;