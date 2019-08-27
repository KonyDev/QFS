#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CIColor (Exports)
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(id) jsinitWithRed: (CGFloat) r green: (CGFloat) g blue: (CGFloat) b alpha: (CGFloat) a colorSpace: (id) colorSpace 
{
	id resultVal__;
	resultVal__ = [[self initWithRed: r green: g blue: b alpha: a colorSpace: colorSpace ] autorelease];
	return resultVal__;
}
-(id) jsinitWithRed: (CGFloat) r green: (CGFloat) g blue: (CGFloat) b alpha: (CGFloat) a 
{
	id resultVal__;
	resultVal__ = [[self initWithRed: r green: g blue: b alpha: a ] autorelease];
	return resultVal__;
}
-(id) jsinitWithRed: (CGFloat) r green: (CGFloat) g blue: (CGFloat) b 
{
	id resultVal__;
	resultVal__ = [[self initWithRed: r green: g blue: b ] autorelease];
	return resultVal__;
}
-(id) jsinitWithRed: (CGFloat) r green: (CGFloat) g blue: (CGFloat) b colorSpace: (id) colorSpace 
{
	id resultVal__;
	resultVal__ = [[self initWithRed: r green: g blue: b colorSpace: colorSpace ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCGColor: (id) c 
{
	id resultVal__;
	resultVal__ = [[self initWithCGColor: c ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CIColor class], @protocol(CIColorInstanceExports));
	class_addProtocol([CIColor class], @protocol(CIColorClassExports));
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
void load_CoreImage_CIColor_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
