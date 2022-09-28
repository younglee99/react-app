import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/page/KeywordPage.css';

function Create(props){
    return <article>
        <form onSubmit={event=>{
            event.preventDefault();
            const keyword = event.target.keyword.value;
            props.onCreate(keyword);
        }}>
            <div id="inp">
                <input id="k_Text" type="text" name="keyword" ></input>
                <input id="k_Add" type="submit" value="추가"></input>
            </div>
        </form>
    </article>
}



const KeywordPage = () => {
    const [topics, setTopics] = useState([]);
    
    return (
        <div className='page'>
            <Header title = "키워드 알림 설정"/>
            <div className='middle'>      
                <Create onCreate={(keyword)=>{
                    const newTopic = {keyword:keyword};
                    const newTopics = [...topics];
                    newTopics.push(newTopic);
                    setTopics(newTopics);
                }}></Create>
            </div>
            <Footer/>
        </div>
    );
};

export default KeywordPage;