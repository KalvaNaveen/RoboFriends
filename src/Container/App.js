import React,{Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
import {setSearchField,requestUsersAction} from '../actions';

const mapStateToProps= (state)=>{
        return{
        searchField:state.searchUsers.searchField,
        users:state.requestUsers.users,
        isPending:state.requestUsers.isPending,
        error:state.requestUsers.error
    }
}

const mapDispatchToProps= (dispatch) =>{
    return {
        onSearchChange: (event)=>dispatch(setSearchField(event.target.value)),
        onUsersRequest:()=>dispatch(requestUsersAction())
    }
}
class App extends Component{
    componentDidMount(){
      this.props.onUsersRequest();
    }

    render(){
        const {searchField,onSearchChange,users,isPending} = this.props;
        const FilteredUser= users.filter((cu)=>{
            return  cu.name.toLowerCase().includes(searchField);
        })
            return  isPending? <h1 className='f1  tc'>loading............</h1> :( 
                                                                                        <div className='tc'>
                                                                                            <h1 className='f1'>RoboFriends</h1>
                                                                                            <SearchBox SearchChange={onSearchChange}/>
                                                                                            <Scroll>
                                                                                            <CardList usersData={FilteredUser}/>
                                                                                            </Scroll>
                                                                                        </div>
                                                                                    )
        }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
