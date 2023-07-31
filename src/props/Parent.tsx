import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      <Child color='Red' onClick={() => console.log('Clicked')}>
        Child can now accept chidren since React 18
      </Child>

      <ChildAsFC color='Red' onClick={() => console.log('Clicked')}>
        ChildAsFC can accept children because TS knows it is a React component
      </ChildAsFC>
    </>
  )
}

export default Parent;
