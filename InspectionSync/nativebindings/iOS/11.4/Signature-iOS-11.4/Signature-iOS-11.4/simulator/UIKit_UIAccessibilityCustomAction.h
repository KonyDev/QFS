#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIAccessibilityCustomAction_symbols(JSContext*);
@protocol UIAccessibilityCustomActionInstanceExports<JSExport>
@property (getter=getJsSelector,setter=setJsSelector:) NSString* jsselector;
@property (copy,nonatomic) NSAttributedString * attributedName;
@property (copy,nonatomic) NSString * name;
@property (nonatomic,weak) id target;
JSExportAs(initWithNameTargetSelector,
-(id) jsinitWithName: (NSString *) name target: (id) target selector: (NSString *) selector );
JSExportAs(initWithAttributedNameTargetSelector,
-(id) jsinitWithAttributedName: (NSAttributedString *) attributedName target: (id) target selector: (NSString *) selector );
@end
@protocol UIAccessibilityCustomActionClassExports<JSExport>
@end
#pragma clang diagnostic pop