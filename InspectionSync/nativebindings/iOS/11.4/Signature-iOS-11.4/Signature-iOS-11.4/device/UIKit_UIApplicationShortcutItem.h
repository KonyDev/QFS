#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIApplicationShortcutItem_symbols(JSContext*);
@protocol UIApplicationShortcutItemInstanceExports<JSExport, NSCopyingInstanceExports_, NSMutableCopyingInstanceExports_>
@property (readonly,copy,nonatomic) NSString * localizedSubtitle;
@property (readonly,copy,nonatomic) NSString * type;
@property (readonly,copy,nonatomic) NSString * localizedTitle;
@property (readonly,copy,nonatomic) NSDictionary * userInfo;
@property (readonly,copy,nonatomic) UIApplicationShortcutIcon * icon;
JSExportAs(initWithTypeLocalizedTitleLocalizedSubtitleIconUserInfo,
-(id) jsinitWithType: (NSString *) type localizedTitle: (NSString *) localizedTitle localizedSubtitle: (NSString *) localizedSubtitle icon: (UIApplicationShortcutIcon *) icon userInfo: (NSDictionary *) userInfo );
JSExportAs(initWithTypeLocalizedTitle,
-(id) jsinitWithType: (NSString *) type localizedTitle: (NSString *) localizedTitle );
@end
@protocol UIApplicationShortcutItemClassExports<JSExport, NSCopyingClassExports_, NSMutableCopyingClassExports_>
@end
@protocol UIApplicationShortcutIconInstanceExports<JSExport, NSCopyingInstanceExports_>
@end
@protocol UIApplicationShortcutIconClassExports<JSExport, NSCopyingClassExports_>
+(id) iconWithType: (UIApplicationShortcutIconType) type ;
+(id) iconWithTemplateImageName: (NSString *) templateImageName ;
@end
@protocol UIMutableApplicationShortcutItemInstanceExports<JSExport>
@property (copy,nonatomic) NSString * localizedSubtitle;
@property (copy,nonatomic) NSString * type;
@property (copy,nonatomic) NSString * localizedTitle;
@property (copy,nonatomic) NSDictionary * userInfo;
@property (copy,nonatomic) UIApplicationShortcutIcon * icon;
@end
@protocol UIMutableApplicationShortcutItemClassExports<JSExport>
@end
#pragma clang diagnostic pop