#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPasteConfiguration_symbols(JSContext*);
@protocol UIPasteConfigurationInstanceExports<JSExport, NSSecureCodingInstanceExports_, NSCopyingInstanceExports_>
@property (copy,nonatomic) NSArray * acceptableTypeIdentifiers;
JSExportAs(initWithTypeIdentifiersForAcceptingClass,
-(id) jsinitWithTypeIdentifiersForAcceptingClass: (JSValue *) aClass );
JSExportAs(addTypeIdentifiersForAcceptingClass,
-(void) jsaddTypeIdentifiersForAcceptingClass: (JSValue *) aClass );
-(void) addAcceptableTypeIdentifiers: (NSArray *) acceptableTypeIdentifiers ;
-(id) jsinit;
JSExportAs(initWithAcceptableTypeIdentifiers,
-(id) jsinitWithAcceptableTypeIdentifiers: (NSArray *) acceptableTypeIdentifiers );
@end
@protocol UIPasteConfigurationClassExports<JSExport, NSSecureCodingClassExports_, NSCopyingClassExports_>
@end
#pragma clang diagnostic pop