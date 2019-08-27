#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation NSTextTab (Exports)
-(id) jsinitWithTextAlignment: (NSTextAlignment) alignment location: (CGFloat) loc options: (NSDictionary *) options 
{
	id resultVal__;
	resultVal__ = [[self initWithTextAlignment: alignment location: loc options: options ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
@implementation NSParagraphStyle (Exports)
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([NSTextTab class], @protocol(NSTextTabInstanceExports));
	class_addProtocol([NSTextTab class], @protocol(NSTextTabClassExports));
	class_addProtocol([NSParagraphStyle class], @protocol(NSParagraphStyleInstanceExports));
	class_addProtocol([NSParagraphStyle class], @protocol(NSParagraphStyleClassExports));
	class_addProtocol([NSMutableParagraphStyle class], @protocol(NSMutableParagraphStyleInstanceExports));
	class_addProtocol([NSMutableParagraphStyle class], @protocol(NSMutableParagraphStyleClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"NSLineBreakByWordWrapping"] = @0;
	context[@"NSLineBreakByCharWrapping"] = @1;
	context[@"NSLineBreakByClipping"] = @2;
	context[@"NSLineBreakByTruncatingHead"] = @3;
	context[@"NSLineBreakByTruncatingTail"] = @4;
	context[@"NSLineBreakByTruncatingMiddle"] = @5;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &NSTabColumnTerminatorsAttributeName;
	if (p != NULL) context[@"NSTabColumnTerminatorsAttributeName"] = NSTabColumnTerminatorsAttributeName;
}
void load_UIKit_NSParagraphStyle_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
