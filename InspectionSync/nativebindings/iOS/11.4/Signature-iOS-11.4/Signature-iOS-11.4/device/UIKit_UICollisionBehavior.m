#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UICollisionBehavior (Exports)
-(id) jsinitWithItems: (NSArray *) items 
{
	id resultVal__;
	resultVal__ = [[self initWithItems: items ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UICollisionBehavior class], @protocol(UICollisionBehaviorInstanceExports));
	class_addProtocol([UICollisionBehavior class], @protocol(UICollisionBehaviorClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UICollisionBehaviorModeItems"] = @1U;
	context[@"UICollisionBehaviorModeBoundaries"] = @2U;
	context[@"UICollisionBehaviorModeEverything"] = @-1U;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UICollisionBehaviorProtocols()
{
	(void)@protocol(UICollisionBehaviorDelegate);
}
void load_UIKit_UICollisionBehavior_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
