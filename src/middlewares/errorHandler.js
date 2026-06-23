import ApiErrorResponseDTO
from "../dto/ApiErrorResponseDTO.js";

export default function errorHandler(
  err,
  req,
  res,
  next
) {

  const status =
    err.statusCode || 500;

  const response =
    new ApiErrorResponseDTO(
      status,
      err.name,
      err.message
    );

  return res
    .status(status)
    .json(response);
}