import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="sort by"
        options={[
          { value: 'title', name: 'by name' },
          { value: 'body', name: 'by discription' },
        ]}
      />
    </div>
  )
}
export default PostFilter
