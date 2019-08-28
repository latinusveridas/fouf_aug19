const { getUserId } = require('../../utils')

const meetup = {
  async createMeetup (
    parent,
    { title, description, date, location },
    ctx,
    info
  ) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createMeetup(
      {
        data: {
          title,
          description,
          date,
          location,
          organizer: {
            connect: {
              id: userId
            }
          }
        }
      },
      info
    )
  }

}

module.exports = { meetup }