import { createMapper, createMap, forMember, mapFrom } from "@automapper/core";
import { classes } from "@automapper/classes";

import { User } from "@entities";
import { UserResponseDto } from "@dto/response";

export const mapper = createMapper({
  strategyInitializer: classes(),
});

createMap(
  mapper,
  User,
  UserResponseDto,
  forMember(
    (destination) => destination.id,
    mapFrom((source) => source.id)
  ),
  forMember(
    (destination) => destination.username,
    mapFrom((source) => source.username)
  ),
  forMember(
    (destination) => destination.firstName,
    mapFrom((source) => source.firstName)
  ),
  forMember(
    (destination) => destination.lastName,
    mapFrom((source) => source.lastName)
  ),
  forMember(
    (destination) => destination.fullName,
    mapFrom((source) => source.firstName + " " + source.lastName)
  )
);
