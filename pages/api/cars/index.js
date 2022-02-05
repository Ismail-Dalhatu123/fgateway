export default (request, response) => {
  response.status(200).json([
    {
      id: 1,
      name: "Car 1",
    },
  ]);
};
