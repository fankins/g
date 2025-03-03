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
import { AgentCreateNestedManyWithoutTeamsInput } from "./AgentCreateNestedManyWithoutTeamsInput";
import { Type } from "class-transformer";
import { ScoreCreateNestedManyWithoutTeamsInput } from "./ScoreCreateNestedManyWithoutTeamsInput";

@InputType()
class TeamCreateInput {
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
    type: () => AgentCreateNestedManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => AgentCreateNestedManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => AgentCreateNestedManyWithoutTeamsInput, {
    nullable: true,
  })
  agents?: AgentCreateNestedManyWithoutTeamsInput;

  @ApiProperty({
    required: false,
    type: () => ScoreCreateNestedManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => ScoreCreateNestedManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => ScoreCreateNestedManyWithoutTeamsInput, {
    nullable: true,
  })
  scores?: ScoreCreateNestedManyWithoutTeamsInput;
}

export { TeamCreateInput as TeamCreateInput };
