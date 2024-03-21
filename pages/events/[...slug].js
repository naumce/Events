import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/eventList"
import ResultsTitle from "../../components/events/results-title"
import { Fragment } from "react"
import Button from "../../components/ui/button"
import ErrorAlert from "../../components/ui/error-alert"

function FilteredEventsPage() {
  const router = useRouter()

  const filterData = router.query.slug

  if (!filterData) {
    return <p className=" ">Loading...</p>
  }

  const filteredfilteredYear = filterData[0]
  const filteredfilteredMonth = filterData[1]

  const numYear = +filteredfilteredYear
  const numMonth = +filteredfilteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
          <div className="center">
            <Button className="btn">Show all events</Button>
          </div>
        </ErrorAlert>
      </Fragment>
    )
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
          <div className="center">
            <Button className="btn">Show all events</Button>
          </div>
        </ErrorAlert>
      </Fragment>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage
