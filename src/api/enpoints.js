const base = `https://api.noroff.dev/api/v1/holidaze`;

export const API = {
  auth: { register: base + "/auth/register", login: base + "/auth/login" },
  profiles: {
    $: base + "/profiles",
    name: (name) => {
      const nameBase = base + "/profiles/" + name;
      return {
        $: nameBase,
        media: nameBase + "/media",
        venues: nameBase + "/venues",
        bookings: nameBase + "/bookings",
      };
    },
  },
  venues: {
    $: base + "/venues",
    id: (id) => {
      const venuesBase = base + "/venues/" + id;
      return {
        /**
         * Single Entry
         *
         * [GET] - This endpoint return a single listing
         *
         * [POST] - This endpoint let you create new venue.
         */
        $: venuesBase,
      };
    },
  },
  booking: {
    $: base + "bookings",
    id: (id) => {
      const bookingsBase = base + "/bookings/" + id;
      return {
        $: bookingsBase,
      };
    },
  },
};
