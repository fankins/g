/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { AgentUpdateManyWithoutTeamsInput } from "./AgentUpdateManyWithoutTeamsInput";
import { Type } from "class-transformer";
import { ScoreUpdateManyWithoutTeamsInput } from "./ScoreUpdateManyWithoutTeamsInput";

@InputType()
class TeamUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  points?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => AgentUpdateManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => AgentUpdateManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => AgentUpdateManyWithoutTeamsInput, {
    nullable: true,
  })
  agents?: AgentUpdateManyWithoutTeamsInput;

  @ApiProperty({
    required: false,
    type: () => ScoreUpdateManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => ScoreUpdateManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => ScoreUpdateManyWithoutTeamsInput, {
    nullable: true,
  })
  scores?: ScoreUpdateManyWithoutTeamsInput;
}

export { TeamUpdateInput as TeamUpdateInput };
