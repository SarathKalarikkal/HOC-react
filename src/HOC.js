import React from 'react';

const HOC = (WrapperComponent, entity) => {

  return class extends React.Component {
    state = {
      data: [],
      term: ''
    };

    async componentDidMount() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
        const json = await res.json();
        this.setState({ data: json });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    render() {
      const { term, data } = this.state;

      const filteredData = data.filter((d) => {

        
        if (entity === 'Users') {
          const { name } = d;
          return name.toLowerCase().includes(term.toLowerCase());
        }
        if (entity === 'Todos') {
          const { title } = d;
          return title.toLowerCase().includes(term.toLowerCase());
        }
        return true;
      });

      return (
        <div className='wrapper'>
          <h2>{entity}</h2>
         <div className='input-group'>
          <label>Search the key word</label>
         <input
            type="text"
            value={term}
            onChange={(e) => this.setState({ term: e.target.value })}
           placeholder='Search'
          />
         </div>
          <WrapperComponent data={filteredData}></WrapperComponent>
        </div>
      );
    }
  };
};

export default HOC;
