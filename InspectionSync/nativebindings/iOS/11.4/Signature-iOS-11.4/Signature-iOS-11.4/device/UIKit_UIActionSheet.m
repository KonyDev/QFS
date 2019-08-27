#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIActionSheet (Exports)
-(id) jsinitWithTitle: (NSString *) title delegate: (id) delegate cancelButtonTitle: (NSString *) cancelButtonTitle destructiveButtonTitle: (NSString *) destructiveButtonTitle otherButtonTitles: (NSString *) otherButtonTitles arguments: (NSArray *) args 
{
	id resultVal__;
	if ([args count] == 0) resultVal__ = [[self initWithTitle: title delegate: delegate cancelButtonTitle: cancelButtonTitle destructiveButtonTitle: destructiveButtonTitle otherButtonTitles: otherButtonTitles , nil] autorelease];
	else if ([args count] == 1) resultVal__ = [[self initWithTitle: title delegate: delegate cancelButtonTitle: cancelButtonTitle destructiveButtonTitle: destructiveButtonTitle otherButtonTitles: otherButtonTitles , args[0], nil] autorelease];
	else if ([args count] == 2) resultVal__ = [[self initWithTitle: title delegate: delegate cancelButtonTitle: cancelButtonTitle destructiveButtonTitle: destructiveButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], nil] autorelease];
	else if ([args count] == 3) resultVal__ = [[self initWithTitle: title delegate: delegate cancelButtonTitle: cancelButtonTitle destructiveButtonTitle: destructiveButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], nil] autorelease];
	else if ([args count] == 4) resultVal__ = [[self initWithTitle: title delegate: delegate cancelButtonTitle: cancelButtonTitle destructiveButtonTitle: destructiveButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], nil] autorelease];
	else if ([args count] == 5) resultVal__ = [[self initWithTitle: title delegate: delegate cancelButtonTitle: cancelButtonTitle destructiveButtonTitle: destructiveButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], nil] autorelease];
	else if ([args count] == 6) resultVal__ = [[self initWithTitle: title delegate: delegate cancelButtonTitle: cancelButtonTitle destructiveButtonTitle: destructiveButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], args[5], nil] autorelease];
	else if ([args count] == 7) resultVal__ = [[self initWithTitle: title delegate: delegate cancelButtonTitle: cancelButtonTitle destructiveButtonTitle: destructiveButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], args[5], args[6], nil] autorelease];
	else if ([args count] == 8) resultVal__ = [[self initWithTitle: title delegate: delegate cancelButtonTitle: cancelButtonTitle destructiveButtonTitle: destructiveButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], nil] autorelease];
	else if ([args count] == 9) resultVal__ = [[self initWithTitle: title delegate: delegate cancelButtonTitle: cancelButtonTitle destructiveButtonTitle: destructiveButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], nil] autorelease];
	else if ([args count] >= 10) resultVal__ = [[self initWithTitle: title delegate: delegate cancelButtonTitle: cancelButtonTitle destructiveButtonTitle: destructiveButtonTitle otherButtonTitles: otherButtonTitles , args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], nil] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIActionSheet class], @protocol(UIActionSheetInstanceExports));
	class_addProtocol([UIActionSheet class], @protocol(UIActionSheetClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIActionSheetStyleAutomatic"] = @-1;
	context[@"UIActionSheetStyleDefault"] = @0;
	context[@"UIActionSheetStyleBlackTranslucent"] = @2;
	context[@"UIActionSheetStyleBlackOpaque"] = @1;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UIActionSheetProtocols()
{
	(void)@protocol(UIActionSheetDelegate);
}
void load_UIKit_UIActionSheet_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
