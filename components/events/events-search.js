import Button from "../ui/button"
import classes from "./events-search.module.css"
import { useRef } from "react"
function EventSearch(props) {
  const yearInputRef = useRef()
  const monthInputRef = useRef()

  function submitHadler(event) {
    event.preventDefault()

    const selectedYear = yearInputRef.current.value
    const selectedMonth = monthInputRef.current.value

    props.onSearch(selectedYear, selectedMonth)
  }

  return (
    <form className={classes.form} onSubmit={submitHadler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2022">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  )
}
export default EventSearch
