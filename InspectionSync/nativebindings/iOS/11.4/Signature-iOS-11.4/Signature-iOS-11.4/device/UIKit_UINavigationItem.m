#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UINavigationItem (Exports)
-(id) jsinitWithTitle: (NSString *) title 
{
	id resultVal__;
	resultVal__ = [[self initWithTitle: title ] autorelease];
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
	class_addProtocol([UINavigationItem class], @protocol(UINavigationItemInstanceExports));
	class_addProtocol([UINavigationItem class], @protocol(UINavigationItemClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UINavigationItemLargeTitleDisplayModeAutomatic"] = @0;
	context[@"UINavigationItemLargeTitleDisplayModeAlways"] = @1;
	context[@"UINavigationItemLargeTitleDisplayModeNever"] = @2;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UINavigationItem_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
