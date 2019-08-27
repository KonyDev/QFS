#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIAlertView (Exports)
-(id) jsinitWithTitle: (NSString *) title message: (NSString *) message delegate: (id) delegate cancelButtonTitle: (NSString *) cancelButtonTitle otherButtonTitles: (NSString *) otherButtonTitles arguments: (NSArray *) args 
{
	id resultVal__;
	if ([args count] == 0) resultVal__ = [[self initWithTitle: title message: message delegate: delegate cancelButtonTitle: cancelButtonTitle otherButtonTitles: otherButtonTitles , nil] autorelease];
	else if ([args count] == 1) resultVal__ = [[self initWithTitle: title message: message delegate: delegate cancelButtonTitle: cancelButtonTitle otherButtonTitles: otherButtonTitles , args[0], nil] autorelease];
	else if ([args count] == 2) resultVal__ = [[self initWithTitle: title message: message delegate: delegate cancelButtonTitle: cancelButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], nil] autorelease];
	else if ([args count] == 3) resultVal__ = [[self initWithTitle: title message: message delegate: delegate cancelButtonTitle: cancelButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], nil] autorelease];
	else if ([args count] == 4) resultVal__ = [[self initWithTitle: title message: message delegate: delegate cancelButtonTitle: cancelButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], nil] autorelease];
	else if ([args count] == 5) resultVal__ = [[self initWithTitle: title message: message delegate: delegate cancelButtonTitle: cancelButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], nil] autorelease];
	else if ([args count] == 6) resultVal__ = [[self initWithTitle: title message: message delegate: delegate cancelButtonTitle: cancelButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], args[5], nil] autorelease];
	else if ([args count] == 7) resultVal__ = [[self initWithTitle: title message: message delegate: delegate cancelButtonTitle: cancelButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], args[5], args[6], nil] autorelease];
	else if ([args count] == 8) resultVal__ = [[self initWithTitle: title message: message delegate: delegate cancelButtonTitle: cancelButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], nil] autorelease];
	else if ([args count] == 9) resultVal__ = [[self initWithTitle: title message: message delegate: delegate cancelButtonTitle: cancelButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], nil] autorelease];
	else if ([args count] >= 10) resultVal__ = [[self initWithTitle: title message: message delegate: delegate cancelButtonTitle: cancelButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], nil] autorelease];
	return resultVal__;
}
-(id) jsinitWithFrame: (CGRect) frame 
{
	id resultVal__;
	resultVal__ = [[self initWithFrame: frame ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIAlertView class], @protocol(UIAlertViewInstanceExports));
	class_addProtocol([UIAlertView class], @protocol(UIAlertViewClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIAlertViewStyleDefault"] = @0L;
	context[@"UIAlertViewStyleSecureTextInput"] = @1L;
	context[@"UIAlertViewStylePlainTextInput"] = @2L;
	context[@"UIAlertViewStyleLoginAndPasswordInput"] = @3L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UIAlertViewProtocols()
{
	(void)@protocol(UIAlertViewDelegate);
}
void load_UIKit_UIAlertView_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
