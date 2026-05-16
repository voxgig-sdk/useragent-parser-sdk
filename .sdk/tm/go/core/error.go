package core

type UseragentParserError struct {
	IsUseragentParserError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewUseragentParserError(code string, msg string, ctx *Context) *UseragentParserError {
	return &UseragentParserError{
		IsUseragentParserError: true,
		Sdk:              "UseragentParser",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *UseragentParserError) Error() string {
	return e.Msg
}
