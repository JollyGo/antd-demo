import Link from "umi/link";


export default () => {
    return <div><b>user index</b>
      <br/>
      <Link to='/puzzlecards'>puzzlecards</Link>
      <br/>
      <Link to='/list'>list</Link>
      <br/>
      <Link to='/upload'>upload</Link>
      </div>;
  }