/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CuratorWhereInput } from "./CuratorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CuratorOrderByInput } from "./CuratorOrderByInput";

@ArgsType()
class CuratorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CuratorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CuratorWhereInput, { nullable: true })
  @Type(() => CuratorWhereInput)
  where?: CuratorWhereInput;

  @ApiProperty({
    required: false,
    type: [CuratorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CuratorOrderByInput], { nullable: true })
  @Type(() => CuratorOrderByInput)
  orderBy?: Array<CuratorOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CuratorFindManyArgs as CuratorFindManyArgs };
