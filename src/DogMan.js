import logo from './dog.png';
import { faker } from '@faker-js/faker';

const testData = [
  {
    text: "냐냐냐냐냐 나는 환쨩이에용 ",
    imgUrl: "https://img.insight.co.kr/static/2020/09/22/700/97so3hz72p4nq982if5l.jpg"
  },
  {
    text: "나는 귀요미에용. ",
    imgUrl: "https://upload.wikimedia.org/wikipedia/ko/thumb/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png/230px-%EC%8B%A0%EC%A7%B1%EA%B5%AC.png"
  },
  {
    text: "누누난나~~.",
    imgUrl: "http://image.auction.co.kr/itemimage/14/97/95/1497951b06.jpg"
  }
  
  
]

function DogMan(props) {
  const h1Element = <h1>{props.title}</h1>
  const imgElement = <img src={logo} className="App-logo" alt="logo" />
  return (
    <>
      
        {h1Element}
        {imgElement}
        
        <p>
         기모륑 환쨩<code>src/App.js</code> 환쨩 귀요미
        </p>
        <ul>
          {testData.map((contents)=>{
           
            return <div>
              <img src={faker.image.avatar()} alt=""/>
              {contents.text}
              </div>
          })}
          
        </ul>

    </>
  );
}

export default DogMan;