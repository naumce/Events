import Image from "next/image"
import classes from "./eventItem.module.css"
import DateIcon from "../icons/date-icon"
import AddressIcon from "../icons/address-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
import Button from "../ui/button"
function EventItem(props) {
  const { id, title, date, location, image } = props
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  const formatedAddress = location.replace(", ", "\n")

  const exploreLink = `/events/${id}`
  return (
    <li className={classes.item}>
      <img className={classes.img} src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2> {title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span> Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}
export default EventItem
