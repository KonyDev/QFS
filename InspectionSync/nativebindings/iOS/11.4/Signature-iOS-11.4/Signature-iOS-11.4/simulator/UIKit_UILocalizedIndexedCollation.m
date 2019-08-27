#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UILocalizedIndexedCollation (Exports)
-(NSArray *) jssortedArrayFromArray: (NSArray *) array collationStringSelector: (NSString *) selector 
{
	SEL selector_ = NSSelectorFromString(selector);
	NSArray * resultVal__;
	resultVal__ = [self sortedArrayFromArray: array collationStringSelector: selector_ ];
	return resultVal__;
}
-(NSInteger) jssectionForObject: (id) object collationStringSelector: (NSString *) selector 
{
	SEL selector_ = NSSelectorFromString(selector);
	NSInteger resultVal__;
	resultVal__ = [self sectionForObject: object collationStringSelector: selector_ ];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UILocalizedIndexedCollation class], @protocol(UILocalizedIndexedCollationInstanceExports));
	class_addProtocol([UILocalizedIndexedCollation class], @protocol(UILocalizedIndexedCollationClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UILocalizedIndexedCollation_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
