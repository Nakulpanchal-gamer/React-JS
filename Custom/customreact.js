function customREnder(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    
    // container.apprendChild(domElement)

    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const props in props) {
       if(props == children) continue;
       domElement.set
    }
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'CLick me to visiti google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

